import randNum from './randNum.js';

const cellGenerator = _ => {
  let dimensions =[0,1,-1,39,-39,40,-40,41,-41];
  let clusters = Array.from({length: randNum(1,20)}, _ => ({start: randNum(0,3979), ends:
  Array.from({length: 9}, (_,i) =>{let x =randNum(0,20) + dimensions[i]; return x;})}))
  let cells = [...clusters.map(e => e.ends.map(x => e.start +x))];
  return [].concat(...cells);
};

export default cellGenerator;
