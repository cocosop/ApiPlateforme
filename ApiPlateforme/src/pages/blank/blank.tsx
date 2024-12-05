import SETTING from '../../assets/videos/setting.mp4'

interface BlankProps {
    selectedMenu: any | null;
}

const blank: React.FC<BlankProps> = ({ selectedMenu }) => {
    return (
        <div style={{ width: '100vw', marginTop: '25px' }}>
            <div id="title">
                <h2>{selectedMenu.menuname}</h2>
                <span id="divider"></span>
                <div style={{ width: '50vw', height: '40vh' }}>
                    <video
                        src={SETTING}
                        autoPlay
                        loop
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                    </video>
                </div>
            </div>
        </div>
    );
};

export default blank;