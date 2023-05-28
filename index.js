import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const rows = content.trim().split('\r\n').slice(1)
  const data = rows.map((row) => row.split(','))
  console.log(`Count ${data.length}`)

  const averageAge = data.reduce((acc, passenger) => acc + Number(passenger[6]), 0) / data.length

  const ports = data.reduce((acc, passenger) => {
    const count = _.get(acc, passenger[12], 0) + 1
    return { ...acc, [passenger[12]] : count}
  }, {})
  console.log(`Ports: ${JSON.stringify(ports)}`)
  console.log("MishaLOh")
  // END
}
