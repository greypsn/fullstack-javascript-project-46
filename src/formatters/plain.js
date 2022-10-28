import _ from 'lodash';

const preVal = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatter = (diff, path = '') => {
  const result = diff
    .filter((obj) => obj.state !== 'unchanged')
    .map((obj) => {
      const newPath = `${path}.${obj.key}`;
      switch (obj.state) {
        case 'removed': {
          return `Property '${newPath.slice(1)}' was removed`;
        }
        case 'added': {
          const val = preVal(obj.value);
          return `Property '${newPath.slice(1)}' was added with value: ${val}`;
        }
        case 'updated': {
          const valOld = preVal(obj.value.oldValue);
          const valNew = preVal(obj.value.newValue);
          return `Property '${newPath.slice(1)}' was updated. From ${valOld} to ${valNew}`;
        }
        default: {
          return formatter(obj.value, newPath);
        }
      }
    });
  return result.join('\n');
};

const formatPlain = (diff) => formatter(diff, '');

export default formatPlain;
