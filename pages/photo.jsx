import Head from 'next/head';
import Image from "next/image";
import { images } from '../consts/consts';
import { Carousel } from '@trendyol-js/react-carousel';

const Photo = () => {
    return (
        <>
            <Head>
                <title>фото</title>
                <meta name="keywords" content="блог,павловский,кирилл,видео,саморазвитие"/>
                <meta name="description" content="блог и видео которые советую посмотреть"/>
            </Head>
            <div style={{ textAlign: 'center' }}>Страница в стадии разработки</div>
            {/* <Carousel show={3.5} slide={3} swiping={true}>
                <Image
                    src={images[0].src}
                    width={images[0].width}
                    height={images[0].height}
                    alt={images[0].alt}
                    className={images[0].className}
                />
                <Image
                    src={images[1].src}
                    width={images[1].width}
                    height={images[1].height}
                    alt={images[1].alt}
                    className={images[1].className}
                />
                                <Image
                    src={images[0].src}
                    width={images[0].width}
                    height={images[0].height}
                    alt={images[0].alt}
                    className={images[0].className}
                />
            </Carousel> */}
        </>
    )
};

export default Photo;
