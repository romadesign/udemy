import styles from '@/styles/banner.module.css'

const Content = ({ data }) => {

  return (
    <>
      {data.map(item => (
        <div className={styles.con} key={item.id}>
          <img className={styles.img} src={item.img} />
          <div  className={styles.con_data}>
             <h6>{item.title}</h6>
          <span>{item.span}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default Content
