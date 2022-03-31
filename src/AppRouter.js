import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Day2App from './Pages/day2';
import Layout from './layout';
import Day3 from './Pages/day3';
import Day4 from './Pages/day4';
import Day6 from './Pages/day6';
import Day7 from './Pages/day7';
import Day9 from './Pages/day9';
import Day8 from './Pages/day8';
import Day10 from './Pages/day10';
import Node from './Components/day10node';
import Angular from './Components/day10angular';
import Day10Child from './Components/day10child';
import ReactJs from './Components/day10react';
import Day11 from './Pages/day11';
import Error from './Pages/error page';
import Day12 from './Pages/day12';
import Day13 from './Pages/day13';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/day2" element={<Day2App />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day6" element={<Day6 />} />
      <Route path="/day7" element={<Day7 />} />
      <Route path="/day8" element={<Day8 />} />
      <Route path="/day9" element={<Day9 />} />
      <Route path="/day10" element={<Day10 />}>
        <Route path="node" element={<Node />} />
        <Route path="react" element={<ReactJs />} />
        <Route path="angular" element={<Angular />} />
        <Route path=":id" element={<Day10Child />} />
      </Route>
      <Route path="/day11" element={<Day11 />} />
      <Route path="/day12" element={<Day12 />} />
      <Route path="/day13" element={<Day13 />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
