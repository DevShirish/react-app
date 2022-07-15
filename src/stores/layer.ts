import { createSlice } from "@reduxjs/toolkit";
import uuid from "../utils/guid";

export const layerSlice = createSlice({
  name: "layer",
  initialState: {
    layers: [] as any[],
    comments: {} as any,
  },
  reducers: {
    add: (state, { payload: { layer } }) => {
      state.layers.push({ ...layer, id: uuid()});
      state.layers = [...state.layers]
      return state;
    },
    updateAll: (state, { payload: { layers } }) => {
      state.layers = layers;
      return state;
    },
    addComment: (state, { payload: { layerId, comment } }) => {
      state.comments[layerId] = [
        ...((state.comments?.[layerId] as any[]) || []),
        { value: comment, id: uuid() },
      ];
      return state
    },
  },
});

export const selectCommentsByLayerId = (layerId: string) => (state: any) => {
  return state.layer.comments?.[layerId]
}

export const selectLayers = (state: any) => {
  return state.layer.layers;
};

// Action creators are generated for each case reducer function
export const { add, updateAll, addComment } = layerSlice.actions;

export default layerSlice.reducer;
