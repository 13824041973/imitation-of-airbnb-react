import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from 'antd';

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  const goodPriceInfo = useSelector((state) => state.home.goodPriceInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <Button type="primary">Button</Button>

      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo.list?.slice(0, 8).map((item) => {
              return <RoomItem itemData={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
