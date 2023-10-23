import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(function () {
  const location = useLocation();

  useStylesScoped$(`
    .progress {
      position: fixed;
      height: 2px;
      display: block;
      width: 100%;
      /* background-color:  #a6c6ff; */
      overflow: hidden;
    }
  
    .indeterminate {
      background-color: #387ef5;
    }
  
    .indeterminate:before {
      content:          '';
      position:         absolute;
      background-color: inherit;
      top:              0;
      left:             0;
      bottom:           0;
      will-change:      left, right;
      animation:        indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  
    }
  
    .indeterminate:after {
      content:          '';
      position:         absolute;
      background-color: inherit;
      top:              0;
      left:             0;
      bottom:           0;
      will-change:      left, right;
      animation:        indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
     
    }
    
    @keyframes indeterminate {
      0% {
        left: -35%;
        right: 100%;
      }
      60% {
        left: 100%;
        right: -90%;
      }
      100% {
        left: 100%;
        right: -90%;
      }
    }
    
    @keyframes indeterminate-short {
      0% {
        left: -200%;
        right: 100%;
      }
      60% {
        left: 107%;
        right: -8%;
      }
      100% {
        left: 107%;
        right: -8%;
      }
    }
    `);

  // const loading = useSignal(false);

  // useOnDocument(
  //   "load",
  //   $(() => {
  //     let timeout;

  //     if (location.isNavigating === false) {
  //       loading.value = false;
  //       clearTimeout(timeout);
  //     } else {
  //       setTimeout(() => {
  //         loading.value = true;
  //       }, 500);
  //     }
  //   }),
  // );

  return (
    <div class="absolute top-0 w-full">
      {location.isNavigating && (
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      )}
    </div>
  );
});
