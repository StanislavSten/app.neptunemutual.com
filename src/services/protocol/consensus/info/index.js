import { getKeys } from "./keys";
import { utils } from "@neptunemutual/sdk";
import { stringifyProps } from "@/utils/props";

export const getUnstakeInfoFor = async (
  chainId,
  coverKey,
  account,
  incidentDate,
  provider
) => {
  try {
    const all = await getKeys(coverKey, account, incidentDate);

    const result = await utils.store.readStorage(chainId, all, provider);

    return stringifyProps(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
