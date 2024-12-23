//iconbuddy
export const Icons = {
    spin: ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 16 16"
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M16 8a7.917 7.917 0 0 0-2.431-5.568A7.776 7.776 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.531 7.531 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.286 7.286 0 0 0 2.799.493a7.157 7.157 0 0 0 6.526-4.547a6.98 6.98 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.759 6.759 0 0 1-2.608.454a6.676 6.676 0 0 1-4.685-2.065a6.597 6.597 0 0 1-1.38-2.173a6.514 6.514 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c.771-.298 1.596-.438 2.416-.416s1.629.202 2.368.532c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6.02 6.02 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a6.872 6.872 0 0 1-.481 1.578z"
                />
            </svg>
        );
    },
    spinner: ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                {...props}
            >
                <circle
                    cx="12"
                    cy="3.5"
                    r="1.5"
                    fill="currentColor"
                    opacity="0"
                >
                    <animateTransform
                        attributeName="transform"
                        calcMode="discrete"
                        dur="2.4s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;90 12 12;180 12 12;270 12 12"
                    />
                    <animate
                        attributeName="opacity"
                        dur="0.6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        values="1;1;0"
                    />
                </circle>
                <circle
                    cx="12"
                    cy="3.5"
                    r="1.5"
                    fill="currentColor"
                    opacity="0"
                >
                    <animateTransform
                        attributeName="transform"
                        begin="0.2s"
                        calcMode="discrete"
                        dur="2.4s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="30 12 12;120 12 12;210 12 12;300 12 12"
                    />
                    <animate
                        attributeName="opacity"
                        begin="0.2s"
                        dur="0.6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        values="1;1;0"
                    />
                </circle>
                <circle
                    cx="12"
                    cy="3.5"
                    r="1.5"
                    fill="currentColor"
                    opacity="0"
                >
                    <animateTransform
                        attributeName="transform"
                        begin="0.4s"
                        calcMode="discrete"
                        dur="2.4s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="60 12 12;150 12 12;240 12 12;330 12 12"
                    />
                    <animate
                        attributeName="opacity"
                        begin="0.4s"
                        dur="0.6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        values="1;1;0"
                    />
                </circle>
            </svg>
        );
    },
    github: ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                {...props}
            >
                {" "}
                <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
            </svg>
        );
    },
    google: ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 48 48"
                {...props}
            >
                <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
            </svg>
        );
    },
};
