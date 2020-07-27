import React, { useState, useEffect } from "react";
import { of, interval, concat, Subject } from "rxjs";
import {
  takeWhile,
  takeUntil,
  scan,
  startWith,
  repeatWhen,
  filter,
  share
} from "rxjs/operators";

const count$ = interval(1000)
  .pipe(
    startWith(10),
    scan((time) => time - 1),
    takeWhile((time) => time > 0)
  ).pipe(share());

const actions$ = new Subject();
const restart$ = actions$.pipe(filter((action) => action === "restart"));
const dismiss$ = actions$.pipe(filter((action) => action === "dismiss"));

const countdown$ = concat(count$, of("Happy new year!")).pipe(
  repeatWhen(() => restart$),
  takeUntil(dismiss$)
);

const subject$ = concat(
  countdown$,
  of("Countdown dismissed")
);

const Countdown = () => {
  const [counter, setCounter] = useState();

  useEffect(() => {
    const subscription = subject$.subscribe(setCounter);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <h3>Countdown</h3>
      <p>{counter}</p>
      <button onClick={() => actions$.next("restart")}>Restart</button>
      <button onClick={() => actions$.next("dismiss")}>Dismiss</button>
    </>
  );
};

export default Countdown;
