
import Navbar from '../common/navbar/Navbar'
import Newproduct from '../products/Newproduct';
import Hero from '../pages/Hero'
import HappyCus from './HappyCus';


function Home(){

    
    return (
        <>
            <Navbar />  
            <Hero />
            <Newproduct />
            <HappyCus />
            
        </>
    );
}

export default Home;