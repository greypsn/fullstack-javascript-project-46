import _ from 'lodash';

const formattingNestedData = (value) => {
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
    .filter(({ state }) => state !== 'unchanged')
    .map(({ state, key, value }) => {
      const newPath = `${path}.${key}`;
      switch (state) {
        case 'removed': {
          return `Property '${newPath.slice(1)}' was removed`;
        }
        case 'added': {
          const val = formattingNestedData(value);
          return `Property '${newPath.slice(1)}' was added with value: ${val}`;
        }
        case 'updated': {
          const valOld = formattingNestedData(value.oldValue);
          const valNew = formattingNestedData(value.newValue);
          return `Property '${newPath.slice(1)}' was updated. From ${valOld} to ${valNew}`;
        }
        default: {
          return formatter(value, newPath);
        }
      }
    });
  return result.join('\n');
};

const formatPlain = (diff) => formatter(diff, '');

export default formatPlain;
