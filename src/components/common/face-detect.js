import React, { useState } from "react";
import { fetchAPI } from "../../utils/api";
import Button from "./button";
import Input from "./input";
import { useLocation, useNavigate } from "react-router-dom";
import { pathname } from '../constants/pathname.constants';

export default function FaceDetect() {
    const [value, setValue] = useState('');
    const [submit, setSubmit] = useState(false);
    const location = useLocation();
    const userId = location.pathname.split('/')[1].slice(6) || location.state?._id
    const [detect, setDetect] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onhandleChange = (e) => {
        setValue(e.target.value)
    }

    const calculateFaceLocation = (data) => {
        const image = document.getElementById('imagedisplay');
        const width = Number(image.width);
        const height = Number(image.height);
       
        const regArray = data.outputs[0].data.regions;
        const checkdata = data.outputs[0].data;
        var array = [ ];
       
        if (checkdata.regions) {
          for (var i=0; i < regArray.length ; i++){
            var clari = regArray[i].region_info.bounding_box;
            array.push({
                left: clari.left_col* width, 
                top: clari.top_row* height, 
                right: width - (clari.right_col* width), 
                bottom: height - (clari.bottom_row* height)});
          }
        }
        return array;
      }

    const onSubmit= async (e, value)=> {
        e.preventDefault();
        if(!value.length || !value.includes('http'|| 'wwww')) {
            return alert('Link should be valid.')
        }
        setSubmit({status: true, value})
        setDetect([])
        setLoading(true)
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({image: value})
            }
            const response =await fetchAPI(`/api${pathname.detect}/${userId}`, options)
            setLoading(false)

            if(response.status?.description === 'Ok') {
                const calculation = calculateFaceLocation(response)

                setDetect(calculation)
                
                try {
                    const res = await fetchAPI(`/api/me`)
                    if(res.error) {
                        localStorage.clear();
                        navigate(`${pathname.login}`)
                    }
                    if(res.data) {
                        navigate(`/p7r18f${res.data._id}`, {state: res.data})
                    }
                } catch(e){
                    localStorage.clear();
                }
            }
            
        } catch(e) {
            if(e.name === 'Error') {
                setLoading(false)
                setDetect(null)
                setSubmit(false)
                return alert('Link should be valid.')
            }
        } 
    }
    return (
        <div className="h-full flex p-5 flex-col justify-start items-center">
 
            <div className="w-full flex justify-center mb-5">
            <Input
              addClassName={'border w-3/4 px-2 text-xs md:text-lg py-1 rounded-l-md border-indigo-500 rounded-r-none outline-secondary'}
              type={'text'}
              name={'link'}
              value={value}
              onEnter={(e)=>{
                if(e.key === 'Enter') onSubmit(e, value);
                }
                }
              placeholder={'image link should be a valid link address'}
              onChangeValue={e=> onhandleChange(e)}  
            /> 
            <Button 
                addClassName={'bg-secondary opacity-100 hover:opacity-95 hover:text-white text-sm text-center md:text-lg font-medium lg:px-3 py-2 rounded-r-md rounded-l-none min-w-[80px] w-1/6'}
                handleClick={e => onSubmit(e, value)}
            >
                {'Submit'}
            </Button>
            </div>
            <div>
                { submit.status && (
                <div className="relative">
                    <img 
                        src={submit.value}
                        alt={'detect-faces'}
                        width={'400px'}
                        height={'auto'}
                        id={'imagedisplay'}
                    />
                    { detect?.length > 0
                        && ( <div>
                            {
                                detect.map((square, i) => {
                                    return (
                                        <div className='boundingbox' key={i} style={{top: square.top, right: square.right, bottom: square.bottom, left: square.left }}>
                                        </div>
                                    );
                                })
                            } 
                        </div>
                        )
                    }
                </div>
                )}

                    <div className="w-full text-center text-sm md:text-lg font-medium">
                    {!detect && `Image will display here once submitted.`}
                    {detect && loading && `Detecting faces in the picture.`}
                    {detect && !loading && (
                        <span>
                            There are 
                            <span className="text-tertiary text-lg font-bold">
                            {` ${detect.length} face${detect.length > 0 ? 's': ''} ` }
                            </span> 
                            in the picture.
                        </span>
                    )}
                    </div>
            </div>
        </div>
    )
}


