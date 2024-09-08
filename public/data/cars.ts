import car_1 from '../assets/Cars/car-7.jpg';
import car_2 from '../assets/Cars/car-2.png';
import car_3 from '../assets/Cars/car-3.png';
import car_4 from '../assets/Cars/car-4.png';
import car_5 from '../assets/Cars/car-5.jpeg';
import car_6 from '../assets/Cars/car-6.jpg';
import person_1 from '../assets/Peoples/person_1.jpg';
import person_2 from '../assets/Peoples/person_2.jpg';
import person_3 from '../assets/Peoples/person_3.jpg';


interface Car {
    image: any;
    productYear: number;
    productType: string;
    mileage: number;
    name: string;
    rating: number;
    description: string;
    price: number;
  }

  interface Teastimonials {
    image: any;
    title: string;
    name: string;
    rating: number;
    description: string;
    country: string;
  }

export const cars: Car[] = [
    {
        image: car_1,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "Mercedes-Benz",
        rating: 5,
        description: "A subcompact luxury SUV offering a sporty design.",
        price: 36230.00
    },
    {
        image: car_2,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "Mercedes-AMG GT",
        rating: 5,
        description: "A high-performance sports car available as a roadster.",
        price: 112900.00
    },
    {
        image: car_3,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "BMW M3",
        rating: 5,
        description: "A sporty version of the BMW, available in sedan.",
        price: 70000.00
    },
    {
        image: car_4,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "BMW M6",
        rating: 5,
        description: "Available in coupe, performance and convertible.",
        price: 104000.00
    },
    {
        image: car_5,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "rolls-royce ghost",
        rating: 5,
        description: "A more contemporary and driver-focused model.",
        price: 315000.00
    },
    {
        image: car_6,
        productYear: 2024,
        productType: "Sedan",
        mileage: 18031,
        name: "Rolls-Royce Phantom",
        rating: 5,
        description: "The flagship model, known for luxurious features.",
        price: 310000.00
    },
]

export const testimonials: Teastimonials[] = [
    {
        title: 'Best Price Assured',
        rating: 5,
        description: 'Overall, I highly recommend the Ford to anyone in the market for a reliable, stylish, and high-performing car. Its a fantastic investment that brings together form and function seamlessly.',
        image: person_1,
        name: 'Eduard Franz',
        country: 'chicago'
    },
    {
        title: 'Clean & Comfortable',
        rating: 5,
        description: 'Overall, I highly recommend the Ford to anyone in the market for a reliable, stylish, and high-performing car. Its a fantastic investment that brings together form and function seamlessly.',
        image: person_2,
        name: 'Yuna Minho',
        country: 'south korea'
    },
    {
        title: 'Smooth Car Transport',
        rating: 5,
        description: 'Overall, I highly recommend the Ford to anyone in the market for a reliable, stylish, and high-performing car. Its a fantastic investment that brings together form and function seamlessly.',
        image: person_3,
        name: 'Jiyeon Jisoo',
        country: 'New York'
    }
]