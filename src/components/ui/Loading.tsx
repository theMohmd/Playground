//Loading component
const Loading = () => {
    return (
        <div className="text-primary flex items-center justify-center size-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="size-32">
                <circle
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="15"
                    r="15"
                    cx="40"
                    cy="65"
                >
                    <animate
                        attributeName="cy"
                        calcMode="spline"
                        dur="1.2"
                        values="65;135;65;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.4"
                    ></animate>
                </circle>
                <circle
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="15"
                    r="15"
                    cx="100"
                    cy="65"
                >
                    <animate
                        attributeName="cy"
                        calcMode="spline"
                        dur="1.2"
                        values="65;135;65;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.2"
                    ></animate>
                </circle>
                <circle
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="15"
                    r="15"
                    cx="160"
                    cy="65"
                >
                    <animate
                        attributeName="cy"
                        calcMode="spline"
                        dur="1.2"
                        values="65;135;65;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="0"
                    ></animate>
                </circle>
            </svg>
        </div>
    );
};

export default Loading;
