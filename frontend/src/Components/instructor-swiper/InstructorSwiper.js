
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
            <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} freeMode={true}  className="instructor-swiper" breakpoints={{
"640": {
    "slidesPerView": 1.5,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 1.2,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 1.7,
    "spaceBetween": 50
  },
  "1500": {
    "slidesPerView": 2.5,
    "spaceBetween": 50
  },
  "1920": {
    "slidesPerView": 2.9,
    "spaceBetween": 50
  },
  "2560": {
    "slidesPerView": 3.5,
    "spaceBetween": 50
  }
  }}>
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
