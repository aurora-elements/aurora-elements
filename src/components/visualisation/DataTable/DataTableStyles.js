import { css } from "lit-element";

export const styles = css`
    :host {
        display: block;
    }
    table {
        box-sizing: border-box;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        border-bottom: 1px solid #e0e6ed;
        text-align: justify;
      }
      table thead th {
        box-sizing: border-box;
        font-size: 80%;
        line-height: 1.3;
        min-height: 12px;
        padding: 10px 20px;
        cursor: default; 
        color: #9c9c9c;
        white-space: nowrap;
      }
      table thead th:first-child {
        padding: 10px 20px 10px 40px;
      }
      table thead th:last-child {
        padding: 10px 40px 10px 20px;
      }
      table tbody {
        border-width: 1px;
        border: none;
        vertical-align: top;
        overflow: auto;
      }
      table strong {
        color: #484848;
        white-space: nowrap;
      }
      tbody tr {
        border-top:none;
        cursor: auto;
      }
      tr td {
        border-left: none;
        border-right: none;
        border-top: 1px solid #e0e6ed;
        font-weight: 400;
        line-height: 1.5;
        padding: 14px 20px;
        min-height: 20px;
        color: #9c9c9c;
      }
      tr td:first-child {
        padding: 14px 20px 14px 40px;
      }
      tr td:last-child {
        padding: 14px 40px 14px 20px;
      }
`;