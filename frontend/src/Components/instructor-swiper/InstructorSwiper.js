
// importing workshop component
import InstructorCard from '../instructor-card/InstructorCard';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Flex } from '@chakra-ui/react';
import './instructorSwiper.css'

// importing swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";



const InstructorSwiper = ({ InstructorList }) => {
    console.log(InstructorList)
    return (
        <div style={{marginTop:"65px"}}>
            <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} freeMode={true} slidesPerView={2.6} className="instructor-swiper">
                {InstructorList.map((el) => (
                    <SwiperSlide><InstructorCard instructor={el} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


InstructorSwiper.defaultProps = {
    InstructorList: [
        {
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        },
        {
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        },
        {
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        },{
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        },
        {
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        },
        {
            picture: 'https://images.ctfassets.net/p0qf7j048i0q/7nozjTQrvoZnihgJAHmsyL/b6062ea05e780c77ce9dbacba470cf54/Portrait_of_Gretchen_Vierstra.jpg?w=1200&h=1200&fit=fill&fm=webp',
            name: 'Instructor Name',
            role: 'UX Designer',
            bio: 'Instructor name is a UX Designer at Weare Moon with five years experience creating interactive user experiences. ',
            facebook: 'https://www.facebook.com/Presidence.tn/',
            instagram: 'https://www.instagram.com/cristiano/',
            linkedIn: 'https://www.linkedin.com/company/wearemoon/mycompany/'
        }
    ]
}

export default InstructorSwiper
