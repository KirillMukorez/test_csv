import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const rows = content.trim().split('\r\n').slice(1)
  const data = rows.map((row) => row.split(',').map((el) => el.replace('"', '').replace(' ', '')))

  console.log(`count: ${data.length}`)

  const ports = _.uniq(data.map((el) => el[12])).slice()
  console.log(`Ports: ${ports}`)

  const genger = data.filter((el) => el[5] === "male")
  const percent = Math.round(100 * genger.length / data.length)

  console.log(`Percantage of genser: male - ${percent} female - ${100 - percent}`);

  const survived = data.filter((el) => Number(el[1]))
  const percenOfSurvived = Math.round(100 * survived.length / data.length)

  console.log(`Percantage of survived: male - ${percenOfSurvived}`);
  const names = data.map((el) => el[3]).filter((name) => name.charAt(0) === 'A')
  console.log(`Names with A: ${names}`)
}
