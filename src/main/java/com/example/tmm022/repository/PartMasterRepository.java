package com.example.tmm022.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PartMasterRepository extends JpaRepository<PartMaster, Long> {

    @Query(value = "SELECT COUNT(*) > 0 FROM EIIS_PART_MASTER WHERE SEGMENTCODE = :unitId AND PART_STATUS = 'A' AND PART_NO = :partNumber", nativeQuery = true)
    boolean validatePartNumberForGlobalParamZero(@Param("unitId") String unitId, @Param("partNumber") String partNumber);

    @Query(value = "SELECT COUNT(*) > 0 FROM HPM_PART_MASTER WHERE UNIT_ID = :unitId AND GROUP_ID = :groupId AND LINE_ID = :lineId AND PART_ID = :partId AND PARTNO = :partNumber", nativeQuery = true)
    boolean validatePartNumberForGlobalParamOne(@Param("unitId") String unitId, @Param("groupId") String groupId, @Param("lineId") String lineId, @Param("partId") String partId, @Param("partNumber") String partNumber);
}