import HeroComp from '../../components/home/HeroComp'
import AboutComp from '../../components/home/AboutComp'
import AfterEventComp from '../../components/home/AfterEventComp'
import LogoComp from '../../components/home/LogoComp'
import NewsletterComp from '../../components/home/NewsletterComp'
import CategoryComp from '../../components/home/CategoryComp'
import ContactComp from '../../components/home/ContactComp'
import '../../assets/css/home/Home.css'
import NewsComp from '../../components/home/NewsComp'


const HomePage = () =>{
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <LogoComp></LogoComp>
        {/* <NewsComp></NewsComp> */}
        <NewsletterComp></NewsletterComp>
        </>
    )
}

export default HomePage