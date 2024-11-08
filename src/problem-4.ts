{
    //

    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shape: Shape): number => {
        let area: number = 0;
        if (shape.shape === "circle") {
            area = 3.14159 * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            area = shape.width * shape.height;
        }
        
        return parseFloat(area.toFixed(2));
    }


    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea)

    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    //   });
    // console.log(rectangleArea);


    //  
}