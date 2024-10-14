import styles from './homeStyle.module.css'; // 使用不同的名称

function Home() {
    return (
        <div className={styles.homeStyle}> {/* 使用 CSS Modules 语法 */}
           测试homeSytle.module.css的用法
        </div>
    );
}



export default Home; // 修改为导出 Home 组件
