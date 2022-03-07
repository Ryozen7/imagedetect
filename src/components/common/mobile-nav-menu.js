
import { MdClose } from "react-icons/md";
import Button from "./button";

const MobileNavMenu = ({ buttons, face, closeSelf, onhandleClick }) => {


  return (
    <div className="w-screen h-sreen fixed top-0 left-0 overflowY bg-white z-50 pb-6">
      <div className="h-screen flex flex-col justify-between w-full">
        {/* Top section */}
        <div className="flex flex-row justify-between w-full px-2 mt-3 py-2 items-center">
          <Button 
                addClassName='w-[80px] flex justify-center items-center'
                handleClick={e=> onhandleClick(e, '')}
            >
            <img 
              src={face}
              alt='face-logo'
              width={'60px'}
              height={'auto'}
            />
            </Button>

          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col w-full h-full flex items-center mt-5">
            { buttons.map( button => (
                    <Button 
                    key={button.name}
                    addClassName={`w-2/3 p-4 m-2 bg-primary rounded-lg hover:opacity-90 hover:text-white text-xl font-medium`} 
                    handleClick={e=> onhandleClick(e, button.path)}
                    >
                        { button.name }
                    </Button>
                ))}
 
          <div>
          
          </div>
        </div>
        <div className="flex h-36">
        
        </div>
      </div>
    </div>
  );
};


export default MobileNavMenu;
