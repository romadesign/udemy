import styles from '@/styles/banner.module.css'

const Content = ({ data, user }) => {
  return (
    <>
      {user != undefined ? (
        <div className={styles.con}>
          <img className={styles.img} src={data[1].img} />
          <div className={styles.con_data}>
            <h6>{data[1].title}</h6>
            <span>{data[1].span}</span>
          </div>
        </div>
      ) : (
        <>
          {data.map(item => (
            <div className={styles.con} key={item.id}>
              <img className={styles.img} src={item.img} />
              <div className={styles.con_data}>
                <h6>{item.title}</h6>
                <span>{item.span}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Content
