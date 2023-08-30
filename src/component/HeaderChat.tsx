import GabrieleBarberio from "../assets/GabrieleBaberio.png";
import { Bubble } from "./Bubble";
import { SendForm } from "./SendForm";

export const Header = () => {
  return (
    <div className="bg-blacky-300 w-4/4 h-screen">
      <div className="flex justify-between  items-center border-solid border-b border-gray-300">
        <div className="flex ml-2 items-center gap-3 m-4">
          <img src={GabrieleBarberio} alt="" />
          <div>
            <h1 className="text-white text-lg "> Davide Simone</h1>
            <p className="text-secondary-100"> Il mio stato </p>
          </div>
        </div>
        <div className="flex gap-2 mr-2">
          <button className="rounded-btn">
            <i className=" mx-auto my-auto">
              <svg
                width="26"
                height="26"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.7924 42.34C34.6083 42.34 34.4242 42.34 34.2402 42.34C28.3494 41.6036 22.4586 39.5787 17.4883 36.4492C12.8861 33.5038 8.83617 29.4539 5.89078 24.8517C2.57722 19.8814 0.552261 13.9906 0 8.09982C0 6.62713 0.368174 5.15443 1.28861 4.04991C2.20904 2.94539 3.49765 2.20904 4.97035 2.02496C5.15443 2.02496 5.33852 2.02496 5.52261 2.02496H11.0452C13.8065 2.02496 16.1996 4.04991 16.5678 6.81121C16.7519 8.468 17.1201 10.1248 17.6723 11.5975C18.4087 13.6224 17.8564 15.8315 16.3837 17.4883L15.0951 18.7769C17.3042 22.0904 20.0655 25.0358 23.5631 27.2449L24.8517 25.9563C26.3244 24.4836 28.7176 23.9313 30.7425 24.6676C32.2152 25.2199 33.872 25.5881 35.5288 25.7722C38.2901 26.1403 40.315 28.5335 40.315 31.2948V36.8174C40.315 38.2901 39.7628 39.7628 38.6582 40.6832C37.5537 41.6036 36.2651 42.34 34.7924 42.34ZM11.0452 5.70669H5.52261C4.97035 5.70669 4.41808 6.07487 4.04991 6.44304C3.86582 6.81121 3.68174 7.17939 3.68174 7.73165C4.234 13.0702 6.07487 18.2246 9.02026 22.8268C11.7816 27.0608 15.2792 30.7425 19.5132 33.3197C24.1154 36.2651 29.2698 38.106 34.6083 38.6582C35.3447 38.6582 35.7129 38.4742 36.081 38.106C36.4492 37.7378 36.6333 37.3696 36.6333 36.8174V31.2948C36.6333 30.3743 35.8969 29.638 34.9765 29.4539C33.1356 29.2698 31.2948 28.7176 29.4539 27.9812C28.7176 27.7971 27.9812 27.7971 27.4289 28.3494L25.0358 30.7425C24.4836 31.2948 23.5631 31.4789 22.8268 31.1107C17.8564 28.3494 13.8065 24.2995 11.0452 19.3291C10.8611 18.5928 11.0452 17.6723 11.5975 17.1201L13.9906 14.727C14.3588 14.3588 14.5429 13.4383 14.3588 12.8861C13.6224 11.0452 13.2543 9.20434 12.8861 7.36348C12.8861 6.44304 11.9656 5.70669 11.0452 5.70669ZM32.9515 18.5928C32.0311 18.5928 31.2948 18.0405 31.1107 17.1201C30.5584 14.1747 28.1653 11.9656 25.2199 11.2293C24.2995 11.0452 23.5631 10.1248 23.7472 9.02026C23.9313 8.09982 24.8517 7.36348 25.9562 7.54756C30.3743 8.468 33.872 11.7816 34.6083 16.1996C34.7924 17.1201 34.2402 18.2246 33.1356 18.4087C33.1356 18.4087 33.1356 18.5928 32.9515 18.5928ZM40.315 18.4087C39.3946 18.4087 38.6582 17.6723 38.4742 16.7519C37.7378 9.94069 32.3993 4.60217 25.404 3.68174C24.4836 3.49765 23.7472 2.57722 23.7472 1.65678C23.7472 0.736348 24.8517 0 25.7722 0C34.4242 0.920434 41.0514 7.54756 41.9718 16.1996C42.1559 17.1201 41.4195 18.0405 40.315 18.2246C40.4991 18.4087 40.315 18.4087 40.315 18.4087Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
          <button className="primary-btn" >
              Live Editor
            </button>
          <button className="primary-btn">
          <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 45 45 "
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 17.5C19.067 17.5 17.5 19.067 17.5 21C17.5 22.933 19.067 24.5 21 24.5C22.933 24.5 24.5 22.933 24.5 21C24.5 19.067 22.933 17.5 21 17.5ZM14 21C14 17.134 17.134 14 21 14C24.866 14 28 17.134 28 21C28 24.866 24.866 28 21 28C17.134 28 14 24.866 14 21Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 3.5C20.5359 3.5 20.0908 3.68437 19.7626 4.01256C19.4344 4.34075 19.25 4.78587 19.25 5.25V5.55448C19.2464 6.4589 18.9784 7.34252 18.479 8.09658C17.9796 8.85063 17.2707 9.44221 16.4394 9.79849C16.2914 9.86191 16.1357 9.90447 15.9768 9.92524C15.2215 10.1898 14.4083 10.255 13.6168 10.1114C12.705 9.94611 11.8637 9.51146 11.2013 8.86351L11.1875 8.85001L11.0826 8.74494C10.92 8.58223 10.7263 8.45246 10.5139 8.36439C10.3014 8.27633 10.0737 8.231 9.84375 8.231C9.61377 8.231 9.38605 8.27633 9.1736 8.36439C8.96116 8.45246 8.76815 8.58154 8.60563 8.74425L8.60425 8.74562C8.44154 8.90815 8.31246 9.10116 8.22439 9.3136C8.13633 9.52605 8.091 9.75377 8.091 9.98375C8.091 10.2137 8.13633 10.4414 8.22439 10.6539C8.31246 10.8663 8.44154 11.0593 8.60425 11.2219L8.72359 11.3412C9.37153 12.0036 9.80612 12.845 9.97143 13.7568C10.1335 14.6504 10.0295 15.5714 9.67304 16.4059C9.34831 17.2573 8.77971 17.9947 8.03783 18.5253C7.28095 19.0666 6.37872 19.3678 5.44842 19.3895L5.4075 19.39H5.25C4.78587 19.39 4.34075 19.5744 4.01256 19.9026C3.68437 20.2308 3.5 20.6759 3.5 21.14C3.5 21.6041 3.68437 22.0492 4.01256 22.3774C4.34075 22.7056 4.78587 22.89 5.25 22.89H5.55448C6.4589 22.8936 7.34252 23.1616 8.09658 23.661C8.84801 24.1586 9.4381 24.8644 9.79477 25.692C10.1659 26.5375 10.2762 27.4746 10.1114 28.3832C9.94611 29.295 9.51146 30.1363 8.86351 30.7987L8.85001 30.8125L8.74493 30.9174C8.58222 31.08 8.45246 31.2737 8.36439 31.4861C8.27633 31.6986 8.231 31.9263 8.231 32.1562C8.231 32.3862 8.27633 32.6139 8.36439 32.8264C8.45246 33.0388 8.58154 33.2318 8.74425 33.3944L8.74563 33.3958C8.90815 33.5585 9.10115 33.6875 9.3136 33.7756C9.52605 33.8637 9.75377 33.909 9.98375 33.909C10.2137 33.909 10.4414 33.8637 10.6539 33.7756C10.8663 33.6875 11.0594 33.5585 11.2219 33.3958L11.3412 33.2764C12.0036 32.6285 12.845 32.1939 13.7568 32.0286C14.6503 31.8665 15.5714 31.9705 16.4058 32.327C17.2573 32.6517 17.9947 33.2203 18.5253 33.9622C19.0666 34.719 19.3678 35.6213 19.3895 36.5516L19.39 36.5925V36.75C19.39 37.2141 19.5744 37.6592 19.9026 37.9874C20.2308 38.3156 20.6759 38.5 21.14 38.5C21.6041 38.5 22.0492 38.3156 22.3774 37.9874C22.7056 37.6592 22.89 37.2141 22.89 36.75V36.4525L22.89 36.4455C22.8936 35.5411 23.1616 34.6575 23.661 33.9034C24.1587 33.1519 24.8645 32.5618 25.6922 32.2051C26.5376 31.8341 27.4746 31.7238 28.3832 31.8886C29.295 32.0539 30.1363 32.4885 30.7987 33.1365L30.8125 33.15L30.9174 33.2551C31.08 33.4178 31.2737 33.5475 31.4861 33.6356C31.6986 33.7237 31.9263 33.769 32.1562 33.769C32.3862 33.769 32.6139 33.7237 32.8264 33.6356C33.0388 33.5475 33.2318 33.4185 33.3944 33.2558L33.3958 33.2544C33.5585 33.0918 33.6875 32.8988 33.7756 32.6864C33.8637 32.4739 33.909 32.2462 33.909 32.0163C33.909 31.7863 33.8637 31.5586 33.7756 31.3461C33.6875 31.1337 33.5585 30.9406 33.3958 30.7781L33.2764 30.6588C32.6285 29.9964 32.1939 29.155 32.0286 28.2432C31.8638 27.3346 31.9741 26.3976 32.3451 25.5522C32.7018 24.7245 33.2919 24.0187 34.0434 23.521C34.7975 23.0216 35.6811 22.7536 36.5855 22.75L36.5925 22.75L36.75 22.75C37.2141 22.75 37.6592 22.5656 37.9874 22.2374C38.3156 21.9092 38.5 21.4641 38.5 21C38.5 20.5359 38.3156 20.0908 37.9874 19.7626C37.6592 19.4344 37.2141 19.25 36.75 19.25H36.4525L36.4455 19.25C35.5411 19.2464 34.6575 18.9784 33.9034 18.479C33.1494 17.9796 32.5578 17.2707 32.2015 16.4394C32.1381 16.2914 32.0955 16.1357 32.0748 15.9768C31.8102 15.2215 31.745 14.4083 31.8886 13.6168C32.0539 12.705 32.4885 11.8637 33.1365 11.2013L33.15 11.1875L33.2551 11.0826C33.4178 10.92 33.5475 10.7263 33.6356 10.5139C33.7237 10.3014 33.769 10.0737 33.769 9.84375C33.769 9.61378 33.7237 9.38605 33.6356 9.1736C33.5475 8.96116 33.4185 8.76816 33.2558 8.60563L33.2544 8.60425C33.0918 8.44154 32.8988 8.31246 32.6864 8.22439C32.4739 8.13633 32.2462 8.091 32.0163 8.091C31.7863 8.091 31.5586 8.13633 31.3461 8.22439C31.1337 8.31246 30.9406 8.44154 30.7781 8.60425L30.6588 8.72359C29.9964 9.37153 29.155 9.80612 28.2432 9.97143C27.3346 10.1362 26.3975 10.0259 25.552 9.65477C24.7244 9.2981 24.0186 8.70801 23.521 7.95658C23.0216 7.20252 22.7536 6.31889 22.75 5.41448L22.75 5.4075V5.25C22.75 4.78587 22.5656 4.34075 22.2374 4.01256C21.9092 3.68437 21.4641 3.5 21 3.5ZM33.95 26.25L35.551 26.9566C35.4592 27.1645 35.4319 27.3952 35.4724 27.6188C35.5125 27.84 35.6172 28.0443 35.7733 28.2059L35.8692 28.3019C36.3571 28.7893 36.7447 29.3688 37.0088 30.0058C37.273 30.6432 37.409 31.3263 37.409 32.0163C37.409 32.7062 37.273 33.3894 37.0088 34.0267C36.7446 34.664 36.3574 35.243 35.8692 35.7306L34.6325 34.4925L35.8706 35.7292C35.383 36.2174 34.804 36.6046 34.1667 36.8688C33.5294 37.133 32.8462 37.269 32.1562 37.269C31.4663 37.269 30.7831 37.133 30.1458 36.8688C29.5088 36.6047 28.93 36.2177 28.4426 35.7299L28.3459 35.6333C28.1843 35.4772 27.98 35.3725 27.7588 35.3324C27.5352 35.2919 27.3045 35.3192 27.0966 35.411L27.0794 35.4186C26.8755 35.506 26.7016 35.651 26.5791 35.8359C26.4571 36.0202 26.3914 36.2359 26.39 36.4569V36.75C26.39 38.1424 25.8369 39.4777 24.8523 40.4623C23.8677 41.4469 22.5324 42 21.14 42C19.7476 42 18.4123 41.4469 17.4277 40.4623C16.4431 39.4777 15.89 38.1424 15.89 36.75V36.6176C15.8817 36.395 15.8082 36.1796 15.6785 35.9983C15.5457 35.8126 15.3602 35.6712 15.1459 35.5924C15.1113 35.5797 15.0771 35.5659 15.0434 35.551C14.8355 35.4592 14.6048 35.4319 14.3812 35.4724C14.16 35.5125 13.9557 35.6173 13.794 35.7733L13.6981 35.8692C13.2107 36.3571 12.6312 36.7447 11.9942 37.0088C11.3568 37.273 10.6737 37.409 9.98375 37.409C9.29382 37.409 8.61065 37.273 7.97331 37.0088C7.33658 36.7449 6.75805 36.3581 6.27075 35.8706C5.78262 35.383 5.39539 34.804 5.13119 34.1667C4.86699 33.5293 4.731 32.8462 4.731 32.1562C4.731 31.4663 4.86699 30.7832 5.13119 30.1458C5.39539 29.5085 5.78262 28.9295 6.27075 28.4419L6.36669 28.3459C6.52275 28.1843 6.62748 27.98 6.66758 27.7588C6.70813 27.5352 6.68076 27.3045 6.58899 27.0966L6.58141 27.0794C6.49402 26.8755 6.34901 26.7016 6.16405 26.5791C5.97982 26.4571 5.76405 26.3914 5.54312 26.39H5.25C3.85761 26.39 2.52225 25.8369 1.53769 24.8523C0.553124 23.8677 0 22.5324 0 21.14C0 19.7476 0.553124 18.4123 1.53769 17.4277C2.52225 16.4431 3.85761 15.89 5.25 15.89H5.38237C5.60496 15.8817 5.82035 15.8082 6.00172 15.6785C6.18736 15.5457 6.32877 15.3602 6.40756 15.1459C6.42029 15.1113 6.4341 15.0771 6.44899 15.0434C6.54076 14.8355 6.56813 14.6048 6.52758 14.3812C6.48748 14.16 6.38274 13.9557 6.22667 13.794L6.13075 13.6981C5.64263 13.2105 5.25539 12.6315 4.99119 11.9942C4.72699 11.3568 4.591 10.6737 4.591 9.98375C4.591 9.29382 4.72699 8.61065 4.99119 7.97331C5.25527 7.33627 5.64226 6.7575 6.13006 6.27006C6.6175 5.78226 7.19627 5.39527 7.83331 5.13119C8.47065 4.86699 9.15382 4.731 9.84375 4.731C10.5337 4.731 11.2168 4.86699 11.8542 5.13119C12.4915 5.39539 13.0705 5.78263 13.5581 6.27075L13.654 6.36667C13.8157 6.52274 14.02 6.62748 14.2412 6.66758C14.4648 6.70813 14.6955 6.68076 14.9034 6.58899C15.0155 6.53953 15.1321 6.50211 15.2514 6.47714C15.3734 6.39432 15.4787 6.28816 15.5609 6.16405C15.6829 5.97982 15.7486 5.76405 15.75 5.54312V5.25C15.75 3.85761 16.3031 2.52225 17.2877 1.53769C18.2723 0.553124 19.6076 0 21 0C22.3924 0 23.7277 0.553124 24.7123 1.53769C25.6969 2.52225 26.25 3.85761 26.25 5.25V5.40312C26.2514 5.62405 26.3171 5.83982 26.4391 6.02405C26.5616 6.20901 26.7355 6.35412 26.9394 6.4415L26.9566 6.4489C27.1646 6.54067 27.3952 6.56813 27.6188 6.52758C27.84 6.48748 28.0443 6.38275 28.2059 6.22669L28.3019 6.13075C28.7895 5.64262 29.3685 5.25539 30.0058 4.99119C30.6432 4.72699 31.3263 4.591 32.0163 4.591C32.7062 4.591 33.3893 4.72699 34.0267 4.99119C34.664 5.25539 35.243 5.64263 35.7306 6.13075C36.2181 6.61805 36.6049 7.19657 36.8688 7.83331C37.133 8.47065 37.269 9.15382 37.269 9.84375C37.269 10.5337 37.133 11.2168 36.8688 11.8542C36.6047 12.4912 36.2177 13.07 35.7299 13.5574L35.6333 13.654C35.4773 13.8157 35.3725 14.02 35.3324 14.2412C35.2919 14.4648 35.3192 14.6955 35.411 14.9034C35.4605 15.0155 35.4979 15.1321 35.5229 15.2514C35.6057 15.3734 35.7118 15.4787 35.8359 15.5609C36.0202 15.6829 36.2359 15.7486 36.4569 15.75H36.75C38.1424 15.75 39.4777 16.3031 40.4623 17.2877C41.4469 18.2723 42 19.6076 42 21C42 22.3924 41.4469 23.7277 40.4623 24.7123C39.4777 25.6969 38.1424 26.25 36.75 26.25H36.5969C36.3759 26.2514 36.1602 26.3171 35.9759 26.4391C35.791 26.5616 35.6459 26.7355 35.5585 26.9394L33.95 26.25Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  
          </button>
          <button className="border rounded-lg bg-black p-4"></button>
        </div>
      </div>

      {/* BOX CHAT ED INPUT */}
      <div className="col flex-col gap-9 h-[63vh]"> 
        {/* DIV BOX CHAT */}
       <div className=" flex-col h-full m-2">
          <Bubble />
       </div>
              {/* DIV FORM SEND TXT */}
       <div className="">
        <SendForm />
       </div>
      </div>


    </div>
  );
};
