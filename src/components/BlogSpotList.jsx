import Button from './Button';

function BlogSpotList(){
  const handleClick = () => {

    console.log('Button clicked!');
  }

  return (
    <div>

      <Button onClick={handleClick}>

        Click me!

      </Button>

    </div>
  );
}

export default BlogSpotList;