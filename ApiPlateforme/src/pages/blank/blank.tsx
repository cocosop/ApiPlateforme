const blank = () => {
    const menuName = localStorage.getItem('menu')
    console.log(menuName)
    return (
        <div
            style={{ width: '100vw', height: '100vh' }}
        >
            <div id="title">
                <h2>{menuName}</h2>
                <span id="divider"></span>
            </div>
        </div>
    );
};

export default blank;