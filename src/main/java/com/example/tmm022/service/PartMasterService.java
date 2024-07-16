package com.example.tmm022.service;

import com.example.tmm022.repository.PartMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartMasterService {

    @Autowired
    private PartMasterRepository partMasterRepository;

    /**
     * Validates the part number based on the global parameter.
     *
     * @param partNumber the part number to validate
     * @param globalParameter the global parameter to determine the validation logic
     * @return the validation result
     */
    public boolean validatePartNumber(String partNumber, String globalParameter) {
        // Execute the appropriate SQL query based on the global parameter
        boolean isValid = partMasterRepository.validatePartNumber(partNumber, globalParameter);
        
        // Return the validation result
        return isValid;
    }
}
