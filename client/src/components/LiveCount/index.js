
import countapi from 'countapi-js';

// countapi.visits('https://api.countapi.xyz/hit/yashkapure.netlify.app/visits?').then((result) => {
const Results = () => {
  // countapi.visits('https://api.countapi.xyz/hit/yashkapure.netlify.app/visits?').then((result) => {
  //   console.log(result.value);
  countapi.update('https://yashkapure.netlify.app/', 'test', 1).then((result) => { 
      <h1>{result.value}</h1>
    })
  }

const LiveCount = () => {
 
  return (
    <>
       <Results/>
        
    </>
  )
}

export default LiveCount;