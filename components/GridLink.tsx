interface GridLink {
    link: string;
    title: string;
}

export default (props: GridLink) => {
    return (
        <a href={props.link} className="rounded h-60 bg-gray-200 flex flex-col p-2">
            <div data-description="logo" className="flex-1">

            </div>
            <div data-description="title" className="text-2xl text-center">
                {props.title}
            </div>
        </a>
    );
};