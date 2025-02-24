import {useState, } from "react";
import {
  View,
  Text,
 
  TouchableOpacity,
  ActivityIndicator,
  NativeEventEmitter,
  
} from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";



const Nearbyjobs = () => {
  const router = useRouter();

  const {data, isLoading, error} = useFetch("search", {query: 'Python developer', page: '1', num_pages: '1'})
  
  // const isLoading = false;
  // const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) :  error ? (
            <Text>Something went wrong</Text>
          ) :
          (
            
            data?.map((job) => (
              <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}

              />
            ))

       

          )}
        </View>
      </View>
    

  );
};

export default Nearbyjobs;

