objectDetector= "";
img= "";
objects =[];

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function goResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects= results;
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if(status !="")
    {
        
    }
}