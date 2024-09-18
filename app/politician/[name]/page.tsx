const politicianDetail: React.FC<{ params: { name: string } }> = ({ params }) => {
    return (
        <div>
            {decodeURIComponent(params.name)}
        </div>
    );
}

export default politicianDetail;