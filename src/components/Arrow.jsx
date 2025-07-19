
function Arrow() {

    return (
        <div className="arrow-container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow arrow-pointy"
            >
                <polyline points="9 3 14 8 9 13" />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow arrow-full"
            >
                <line x1="1.5" y1="8" x2="14" y2="8" />
                <polyline points="9.5 3 14.5 8 9.5 13" />
            </svg>
        </div>
    )
}

export default Arrow;

