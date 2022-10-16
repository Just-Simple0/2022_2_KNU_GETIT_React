import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Taehwan Kim" backgroundColor="#99ccff">
            <p>안녕하세요, 김태환입니다.</p>
            <p>이 페이지는 리액트를 통해 개발되었습니다.</p>
        </Card>
    );
}

export default ProfileCard;
