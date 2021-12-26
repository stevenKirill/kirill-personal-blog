import { videos } from "./videos";
import styles from '../../styles/video.module.css';

/** Список видео */
export const VideoBlock = () => {
    return (
        <>
            <h2 className={styles.header}>
                В данном разделе я оставлю видео, которые я считаю полезными по той или иной теме.
            </h2>
            <div className={styles.wrapper}>
                {videos.map(video => {
                    return (
                        <div key={video.id} className={styles.videoResponsive}>
                            <div className={styles.name}>{video.name}</div>
                            <div className={styles.category}>{video.category}</div>
                            <iframe
                                width="453"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
};
