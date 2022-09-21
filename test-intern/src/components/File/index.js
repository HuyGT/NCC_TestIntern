/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.scss";
export default function File({ css, html, url }) {
  return (
    <div className="file">
      <div className="file-title">Lorem ipsum dolor sit amet</div>
      <div className="file-content">
        {css ? (
          <img src="https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1664755200&Signature=NCdXIb53zvbJldoMoVaR-iK-AcflYFpbTyVHdJzS3jYwlvIzL5GrCCNU9JyUVM0hG5H90sAo17kVatFmhztYUfLr0m2divNvDrGcL73G3DbofO3SiKhAH9vFu2Zy9KaazXqo8WfocMLBolLl3UER9dzaYyO1xMisRNxsTgQ8IaC5sdo7UnLd8HU~htKldVnWQ03zGnOUaJYbdj2~1igZHDl4OS0e0M0i~rSdHYjRGIZfkedGBijU4rJAZ9eyMLLv5gcQ4xDvJT2oVEBCOXVWgqDHJwneLQz0MRXJUALli5b6lrjqrANA6OnwWfWtpVcKEaZAKXISVUOez-qmfIRgzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
        ) : html ? (
          <img src="https://s3-alpha-sig.figma.com/img/2283/e203/66ceb1e8d5d276758ee00c3663bae8e9?Expires=1664755200&Signature=ZjJLVK5zQBo7g1hwU1K~ZfhIy9EPtiwMCKDyfIKhglGmeRkeJYXV~cbFC3exFmR1hMcrMRkN8r6gkFD7MqWdDzxAcaR0z1kTccIk--ojHmULu6E6vg~l0nakfnEphG81kduVybI9cV~pxNEbIL25yQer-4LaNjMVfCq6cftd7~3m6Db9IDE8gGtoF6GAV7ufEUMl0mI15DDRz8B7ZUOPUuQ7EdHCcW1BU6~tez-JL4pNiyUPgNizKZwmD5lG33vhZnzEBLmMhfhL2beYyggT2AbuA7KmyFTUitzZVS23EBcDpUmBAOOU3QBjshX6xN0HKCUDO7kxqiozhgXk4j0ZnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
        ) : (
          url && (
            <img src="https://s3-alpha-sig.figma.com/img/c9c3/230b/112f1704f67d2cb7c852b396cde6858e?Expires=1664755200&Signature=OxSL8h78NusH8n5kcQ8odBw1h-winqT2CcMbHT-7XV4PImbmnzkn~lj9ulgygL8iHV3pYA2hlCsiL5BwUbNAiQmPcSr6XduJpqGfpLBZyvbanBMTLHAxIKnw7TlAwH6aAmMAQXnoMrPmHnys8ysbveGbhgzFfYNbHP9OQUe2x-BotuGiICAZqMuDIMIGp-Jnew6qjxDIYPhDc97XN~HCQJhDmP2TxvU4io~Ky8-zFpvpiokSkwmHxxEFOxy2O-9H3p85xW1auqjVB1MZ7kGRD4-9wXKW~8HQM6Ciz51vvY9wwTh8WAI7m~BZGO96ulSghLR7HZmIQHmA~Mgah3HKIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
          )
        )}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
        </div>
      </div>
      <div className="file-footer">
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
    </div>
  );
}
