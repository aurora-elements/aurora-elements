import { css } from "lit";

export const styles = css`
  :host {
    display:                grid;
    grid-template-columns:  repeat(auto-fill, minmax(var(--p2f-grid-column-min, 300px), 1fr));
    grid-gap:               var(--p2f-grid-gap, 20px);
    background-color:       var(--p2f-grid-bg, #e6e9ef);
    padding:                var(--p2f-grid-padding, 40px);
    --card-radius:          var(--p2f-grid-item-radius, 0);
  }
  ae-card {
      transition:           transform .3s ease-in-out;
      box-shadow:           var(--p2f-grid-item-shadow, 0px 20px 30px -20px rgba(0, 0, 0, 0.1));
      padding:              var(--p2f-grid-item-padding, 20px);
      display:              block;
  }
  ::part(card-figure) {
    aspect-ratio:           var(--p2f-grid-item-image-aspect-ration, 1 / 1.5);
  }
  ::part(card-img) {
    object-fit:             cover;
    width:                  100%;
    height:                 100%;
  }
  ::part(card-header) {
    padding-left:           0;
    padding-right:          0;
  }
  ::part(card-label) {
    font-weight:            700;
    text-transform:         uppercase;
    white-space:            nowrap;
    overflow:               hidden;
    text-overflow:          ellipsis;
    font-size:              14px;
  }
  .p2f-grid-item-actions {
    transition:             opacity 300ms linear 0s;
    opacity:                0;
    position:               absolute;
    top:                    0;
    left:                   0;
    width:                  100%;
    height:                 100%;
    z-index:                10;
    display:                grid; 
    grid-template-columns:  1fr 1fr 1fr; 
    grid-template-rows:     1fr 80px; 
    grid-template-areas:    "primary primary primary" ". . ."; 
  }
  .p2f-grid-item-actions a {
    background:             var(--p2f-grid-item-action-secondary-bg, #fff);
    text-decoration:        none;
    color:                  var(--p2f-grid-item-action-color, var(--p2f-grid-item-action-primary-bg, #7DAC46));
    text-transform:         uppercase; 
    font-size:              var(--p2f-grid-item-action-font-size, 12px);
    font-family:            var(--p2f-grid-item-action-font-family, 'Roboto', sans-serif);                  
  }
  .p2f-grid-item-actions a:not(.action-primary):hover {
      color:                var(--p2f-grid-item-action-color-hover, #5D902C);
  }
  .p2f-grid-item-actions a svg {
    width:                  24px;
    margin:                 18px auto 5px auto;
    display:                block;
  }
  .p2f-grid-item-actions a span {
    display:                block;
    width:                  100%;
    text-align:             center;
    line-height:            120%;
  }
  .p2f-grid-item-actions a.action-primary {
    background:             var(--p2f-grid-item-action-primary-bg, #7DAC46);
  }
  .p2f-grid-item-actions a.action-primary {         
    grid-area:              primary; 
    display:                grid;
    grid-template-rows:     .75fr .25fr;
    align-items:            center;
    transition:             opactiy 300ms ease-in-out 0s;
    color:                  var(--p2f-grid-item-action-primary-color, #fff);
    opacity:                .8;                             
    font-weight:            700;
    letter-spacing:         1px; 
    font-size:              var(--p2f-grid-item-action-primary-font-size, 14px);
    font-family:            var(--p2f-grid-item-action-font-family, 'Roboto', sans-serif);                  
  }
  .p2f-grid-item-actions a.action-primary:hover {
    opacity:                .9;                          
  }
  .p2f-grid-item-actions a.action-primary svg {
    width:                  var(--p2f-grid-item-action-primary-icon-size, 80px);
    height:                 var(--p2f-grid-item-action-primary-icon-size, 80px);
    margin:                 0 auto;
  }
  .p2f-grid-item-actions a.action-primary span {
    width:                  100%;
    display:                block;
    text-align:             center;                         
  }
  ae-card:hover .p2f-grid-item-actions {
    opacity:                1;
  }

  .doc-status {
    position:               absolute;
    top:                    0;
    left:                   0;
    padding:                7px 15px 7px 9px;
    background:           #888;
    z-index:                1;
    border-radius:          0 0 99px 0;
    color:                #fff;
    font-size:              20px;
  }
  .doc-status.published {
    background-color:       var(--color-accent);
  }
  .doc-status.draft {
    background-color:       orange;
  }
`;