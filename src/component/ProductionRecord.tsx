import React from "react";
import { BackButton } from "../molecules/BackButton";
import { Page404 } from "../molecules/Page404";
import { test } from "./test";

export const ProductionRecord = () => {
    const contents = test();
    console.log(contents);
  return(
        <>
          <Page404 />
            {/* <h1>collocotion 制作記録</h1>
            <ul>
                <li>(1) デザイン</li>
                <li>(2) 実装</li>
                <li>(3) デプロイ</li>
                <li>(4) レスポンシブ</li>
                <li>(5) 修正・調整 その1</li>
                <li>(6) 修正・調整 その2</li>
                <li>(7) アニメーション その1</li>
                <li>(8) アニメーション その2</li>
            </ul>
            <BackButton /> */}
        </>
    )
}