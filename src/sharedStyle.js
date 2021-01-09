const sharedStyle = {};

sharedStyle.trbl = `
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

sharedStyle.card = `
    img {
        border-radius: 50%;
    }

    h1, p {
        margin: 10px;
        padding: 0;
        font-family: 'Roboto';
    }

    h1 {
        font-size: 1.4em;
        color: var(--primary);
    }
`;

export { sharedStyle };
