import _ from 'lodash';

const indent = (depthLevel, count = 4) => ' '.repeat(depthLevel * count - 2);
const preVal = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }

  const result = Object.entries(value).map(([key, val]) => {
    const handledContent = `${preVal(val, depth + 1)}`;
    return `${indent(depth + 1)}  ${key}: ${handledContent}`;
  });

  return `{\n${result.join('\n')}\n${indent(depth)}  }`;
};

const formatter = (diff, depth) => {
  const result = diff.map((obj) => {
    switch (obj.state) {
      case 'added': {
        const value = preVal(obj.value, depth);
        return `${indent(depth)}+ ${obj.key}: ${value}`;
      }
      case 'removed': {
        const value = preVal(obj.value, depth);
        return `${indent(depth)}- ${obj.key}: ${value}`;
      }
      case 'unchanged': {
        const value = preVal(obj.value, depth);
        return `${indent(depth)}  ${obj.key}: ${value}`;
      }
      case 'updated': {
        const valOld = preVal(obj.value.oldValue, depth);
        const valNew = preVal(obj.value.newValue, depth);
        return `${indent(depth)}- ${obj.key}: ${valOld}\n${indent(depth)}+ ${obj.key}: ${valNew}`;
      }
      default: {
        const value = `{\n${formatter(obj.value, depth + 1)}\n${indent(depth)}  }`;
        return `${indent(depth)}  ${obj.key}: ${value}`;
      }
    }
  });
  return result.join('\n');
};

const formatStylish = (diff) => `{\n${formatter(diff, 1)}\n}`;

export default formatStylish;
