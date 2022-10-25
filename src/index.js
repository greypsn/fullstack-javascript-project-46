import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';

const getPath = (fileName) => {
    return path.resolve(process.cwd(), fileName);
};
const getFileFormat = (fileName) => {
    return path.extname(fileName).slice(1);
};
const readFile = (filePath) => readFileSync(filePath, 'utf8');

const compare = (data1, data2) => {
    const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
    let obj = '';
    const result = keys.flatMap((key) => {
        if (!_.has(data1, key)) {
            obj += `+ ${key}: ${data2[key]}\n`;
            // return { key, value: data2[key], state: 'added' };
          }
          else if (!_.has(data2, key)) {
            obj += `- ${key}: ${data1[key]}\n`;
            // return { key, value: data1[key], state: 'removed' };
          }
          else if (data1[key] === data2[key]) {
            obj += `  ${key}: ${data2[key]}\n`;
            // return { key, value: data1[key], state: 'unchanged' };
          }else{
        
          //   if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        //     return { key, value: buildDiff(data1[key], data2[key]), state: 'complex' };
        //   }
          
        obj += `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}\n`;}
        // return { key, value: { oldValue: data1[key], newValue: data2[key] }, state: 'updated' };
    });
    // return result;
    return obj;
};

const parser = (filepath1, filepath2, option) => {
    const path1 = getPath(filepath1);
    const data1 = JSON.parse(readFile(path1));

    const path2 = getPath(filepath2);
    const data2 = JSON.parse(readFile(path2));

    return compare(data1, data2);
};
export default parser;

