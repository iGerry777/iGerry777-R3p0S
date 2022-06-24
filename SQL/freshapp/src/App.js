import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
const url  = 'https://accbucketlist.herokuapp.com/bucket';

function App() {
  const [BucketListItem, setBucketListItem] = useState()

  useEffect(()=>{
    fetch(url)
    .then(res => res.json()) //retuns another Promise
    .then(bucketListArray => {
      console.log('the bucket list is', bucketListArray);
      'setBucketList'('BucketlistArray')
    })
  })

  return (
    <div className="App">
      <h1>My Bucket List</h1>
    </div>
  );
}

export default App;
