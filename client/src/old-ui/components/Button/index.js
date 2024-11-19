import React, {useEffect, useState} from 'react';
import {useFavicon} from 'react-haiku';
import {Button} from '@chakra-ui/react';


const AnimateFavi = () => {

    const [active, setActive] = useState(false);
    const { setFavicon } = useFavicon();

    const timer = ms => new Promise(res=> setTimeout(res, ms));

    const runAnimation = async (frames) => {
        for (let i = 0; i <= frames; i++) {
            setFavicon(`../../../public/images/f${i}.svg`);
            await timer(100);
        }
    }

    const startAnimation = (frames) =>{
        setInterval(()=>runAnimation(frames), 100*frames);
    }

    useEffect(() => {
        if (!active) return;
        else startAnimation(6);
    })

    return (
        <Button
        flex={1}
        mt={4}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "gray.200",
        }}
            onClick={() => setActive(true)}
        >Animate!</Button>
    );
}

export default AnimateFavi;
