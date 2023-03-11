interface Heading{
    level: number;
    text: string;
    size: '1' | '2' | '3';
}

const renderHeading = (props: Heading) => {
    if(props.level == 1){
        return <h1 className={`text-${3+Number(props.size)}xl text-center`}>{props.text}</h1>;
    }
    if(props.level == 2){
        return <h2 className={`text-${2+Number(props.size)}xl text-center`}>{props.text}</h2>;
    }
    if(props.level == 3){
        return <h3 className={`text-${1+Number(props.size)}xl text-center`}>{props.text}</h3>;
    }
    if(props.level == 4){
        return <h4 className={`text-${Number(props.size)}xl text-center`}>{props.text}</h4>;
    }
    return <h1 className={`text-${3+Number(props.size)}xl text-center`}>{props.text}</h1>;
};

export default (props: Heading) => {
    return renderHeading(props);
}