import styles from '@/styles/course.module.css'

const Stars = ({ rating }) => {

  const getStars = () => {
    if (
      rating &&
      rating !== null &&
      rating !== undefined
    ) {
      return (
        <div className={styles.rating}>
          <div>
            {
              rating >= 1 ? (
                <p className={styles.star_show}>&#9733;</p>
              ) :
                (
                  <p className={styles.star_hide}>&#9733;</p>
                )
            }
          </div>
          <div>
            {
              rating >= 2 ? (
                <p className={styles.star_show}>&#9733;</p>
              ) :
                (
                  <p className={styles.star_hide}>&#9733;</p>
                )
            }
          </div>
          <div>
            {
              rating >= 3 ? (
                <p className={styles.star_show}>&#9733;</p>
              ) :
                (
                  <p className={styles.star_hide}>&#9733;</p>
                )
            }
          </div>
          <div>
            {
              rating >= 4 ? (
                <p className={styles.star_show}>&#9733;</p>
              ) :
                (
                  <p className={styles.star_hide}>&#9733;</p>
                )
            }
          </div>
          <div>
            {
              rating >= 5 ? (
                <p className={styles.star_show}>&#9733;</p>
              ) :
                (
                  <p className={styles.star_hide}>&#9733;</p>
                )
            }
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {getStars()}
    </div>
  )
};

export default Stars;