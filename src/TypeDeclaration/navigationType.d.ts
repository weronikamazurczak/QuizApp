export type NavigationType = {
  navigation: {
    navigate: (screenName: string, paramsToRoute?: undefined) => void;
    setParams: (params: undefined) => void;
  };
};
