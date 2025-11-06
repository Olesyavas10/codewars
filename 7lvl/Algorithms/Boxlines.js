function f(x,y,z){
   let cubes=x*y*z
  //1 кубик имеет 12 ребер, 2 кубика 12+12-4 совместных 3 кубика 12*3-4*2 идущих в z=1
  // (1,2,2) 4 кубика и 12*4-4*4 ребер 
   // (1, 2, 3) 6 кубиков и 12*6-3*4-2*2*4+2
   //(2,2,2) 8кубиков и 12*8-12-4*6
  //чтобы посчитать кол-во кубиков x*y*z
  //if (x+y==2|| x+z==2 || y+z==2) return cubes*12-4*(cubes-1)
//вдоль оси x кубики с соседними ребрами
   let edgesX=4*(x-1)*y*z
 //вдоль оси y кубики с соседними ребрами  
   let edgesY=4*(y-1)*x*z
   let edgesZ=4*(z-1)*y*x
   
   //линии пересечения (дубли)
   let linesX=(x-1)*(y-1)*z
   let linesY=x*(y-1)*(z-1)
   let linesZ=(x-1)*y*(z-1)
   
  return cubes*12-edgesX-edgesY-edgesZ+linesX+linesY+linesZ
}