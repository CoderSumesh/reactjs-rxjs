import React, { useState, useEffect } from "react";
import { from } from "rxjs";
import {
  scan,
  reduce,
  map,
  toArray
} from "rxjs/operators";

import List from "./List";

var obsScan = from([1, 2, 3, 4, 5]);
var scanList$ = obsScan.pipe(
  scan((acc, one) => acc + one, 0),
  map((item) => `Incremental total: ${item}`),
  toArray()
);

var obsReduce = from([1, 2, 3, 4, 5]);
var reduceList$ = obsReduce.pipe(
  reduce((acc, one) => acc + one, 0),
  map((item) => `Reduced total: ${item}`),
  toArray()
);

const ScanReduce = () => {
  const [scanList, setScanList] = useState([]);
  const [reduceList, setReduceList] = useState([]);

  useEffect(() => {
    const subscription_1 = scanList$.subscribe(setScanList);
    const subscription_2 = reduceList$.subscribe(setReduceList);
    return () => {
      subscription_1.unsubscribe();
      subscription_2.unsubscribe();
    };
  }, []);

  return (
    <>
      <h3>Scan</h3>
      <List items={scanList} />
      <h3>Reduce</h3>
      <List items={reduceList} />
    </>
  );
};

export default ScanReduce;
