import _ from 'lodash';

const indent = (depthLevel, count = 4) => ' '.repeat(depthLevel * count - 2);

const formattingNestedData = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }

  const result = Object.entries(value).map(([key, val]) => {
    const handledContent = `${formattingNestedData(val, depth + 1)}`;
    return `${indent(depth + 1)}  ${key}: ${handledContent}`;
  });

  return `{\n${result.join('\n')}\n${indent(depth)}  }`;
};

const formatter = (diff, depth) => {
  const result = diff.map(({ state, key, value }) => {
    switch (state) {
      case 'added': {
        const val = formattingNestedData(value, depth);
        return `${indent(depth)}+ ${key}: ${val}`;
      }
      case 'removed': {
        const val = formattingNestedData(value, depth);
        return `${indent(depth)}- ${key}: ${val}`;
      }
      case 'unchanged': {
        const val = formattingNestedData(value, depth);
        return `${indent(depth)}  ${key}: ${val}`;
      }
      case 'updated': {
        const valOld = formattingNestedData(value.oldValue, depth);
        const valNew = formattingNestedData(value.newValue, depth);
        return `${indent(depth)}- ${key}: ${valOld}\n${indent(depth)}+ ${key}: ${valNew}`;
      }
      case 'complex': {
        const val = `{\n${formatter(value, depth + 1)}\n${indent(depth)}  }`;
        return `${indent(depth)}  ${key}: ${val}`;
      }
      default: {
        throw new Error(`Я исключение которое никогда не выбросится, но если вдруг то кейса - ${state} не ма :)`);
      }
    }
  });
  return result.join('\n');
};

const formatStylish = (diff) => `{\n${formatter(diff, 1)}\n}`;

export default formatStylish;
