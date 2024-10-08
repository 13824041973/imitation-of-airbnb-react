import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiPaginationItem-page {
            margin: 0 9px;
            &:hover {
                text-decoration: underline;
            }
        }

        .Mui-selected {
            background-color: #222;
            color: #fff;
            &:hover {
                background-color: #222;
            }
        }

        .MuiPaginationItem-icon {
            font-size: 24px;
        }


        .desc {
            margin-top: 16px;
        }
    }
`